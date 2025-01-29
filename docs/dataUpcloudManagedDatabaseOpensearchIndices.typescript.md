# `dataUpcloudManagedDatabaseOpensearchIndices` Submodule <a name="`dataUpcloudManagedDatabaseOpensearchIndices` Submodule" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudManagedDatabaseOpensearchIndices <a name="DataUpcloudManagedDatabaseOpensearchIndices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/data-sources/managed_database_opensearch_indices upcloud_managed_database_opensearch_indices}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabaseOpensearchIndices } from '@cdktf/provider-upcloud'

new dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices(scope: Construct, id: string, config: DataUpcloudManagedDatabaseOpensearchIndicesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig">DataUpcloudManagedDatabaseOpensearchIndicesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig">DataUpcloudManagedDatabaseOpensearchIndicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.putIndices">putIndices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.resetIndices">resetIndices</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putIndices` <a name="putIndices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.putIndices"></a>

```typescript
public putIndices(value: IResolvable | DataUpcloudManagedDatabaseOpensearchIndicesIndices[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.putIndices.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices">DataUpcloudManagedDatabaseOpensearchIndicesIndices</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIndices` <a name="resetIndices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.resetIndices"></a>

```typescript
public resetIndices(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataUpcloudManagedDatabaseOpensearchIndices resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isConstruct"></a>

```typescript
import { dataUpcloudManagedDatabaseOpensearchIndices } from '@cdktf/provider-upcloud'

dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformElement"></a>

```typescript
import { dataUpcloudManagedDatabaseOpensearchIndices } from '@cdktf/provider-upcloud'

dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformDataSource"></a>

```typescript
import { dataUpcloudManagedDatabaseOpensearchIndices } from '@cdktf/provider-upcloud'

dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport"></a>

```typescript
import { dataUpcloudManagedDatabaseOpensearchIndices } from '@cdktf/provider-upcloud'

dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataUpcloudManagedDatabaseOpensearchIndices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataUpcloudManagedDatabaseOpensearchIndices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataUpcloudManagedDatabaseOpensearchIndices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/data-sources/managed_database_opensearch_indices#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudManagedDatabaseOpensearchIndices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.indices">indices</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList">DataUpcloudManagedDatabaseOpensearchIndicesIndicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.indicesInput">indicesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices">DataUpcloudManagedDatabaseOpensearchIndicesIndices</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `indices`<sup>Required</sup> <a name="indices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.indices"></a>

```typescript
public readonly indices: DataUpcloudManagedDatabaseOpensearchIndicesIndicesList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList">DataUpcloudManagedDatabaseOpensearchIndicesIndicesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indicesInput`<sup>Optional</sup> <a name="indicesInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.indicesInput"></a>

```typescript
public readonly indicesInput: IResolvable | DataUpcloudManagedDatabaseOpensearchIndicesIndices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices">DataUpcloudManagedDatabaseOpensearchIndicesIndices</a>[]

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudManagedDatabaseOpensearchIndicesConfig <a name="DataUpcloudManagedDatabaseOpensearchIndicesConfig" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabaseOpensearchIndices } from '@cdktf/provider-upcloud'

const dataUpcloudManagedDatabaseOpensearchIndicesConfig: dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.service">service</a></code> | <code>string</code> | Service's UUID for which these indices belongs to. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/data-sources/managed_database_opensearch_indices#id DataUpcloudManagedDatabaseOpensearchIndices#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.indices">indices</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices">DataUpcloudManagedDatabaseOpensearchIndicesIndices</a>[]</code> | indices block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Service's UUID for which these indices belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/data-sources/managed_database_opensearch_indices#service DataUpcloudManagedDatabaseOpensearchIndices#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/data-sources/managed_database_opensearch_indices#id DataUpcloudManagedDatabaseOpensearchIndices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indices`<sup>Optional</sup> <a name="indices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.indices"></a>

```typescript
public readonly indices: IResolvable | DataUpcloudManagedDatabaseOpensearchIndicesIndices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices">DataUpcloudManagedDatabaseOpensearchIndicesIndices</a>[]

indices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/data-sources/managed_database_opensearch_indices#indices DataUpcloudManagedDatabaseOpensearchIndices#indices}

---

### DataUpcloudManagedDatabaseOpensearchIndicesIndices <a name="DataUpcloudManagedDatabaseOpensearchIndicesIndices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabaseOpensearchIndices } from '@cdktf/provider-upcloud'

const dataUpcloudManagedDatabaseOpensearchIndicesIndices: dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudManagedDatabaseOpensearchIndicesIndicesList <a name="DataUpcloudManagedDatabaseOpensearchIndicesIndicesList" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabaseOpensearchIndices } from '@cdktf/provider-upcloud'

new dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.get"></a>

```typescript
public get(index: number): DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices">DataUpcloudManagedDatabaseOpensearchIndicesIndices</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataUpcloudManagedDatabaseOpensearchIndicesIndices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices">DataUpcloudManagedDatabaseOpensearchIndicesIndices</a>[]

---


### DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference <a name="DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabaseOpensearchIndices } from '@cdktf/provider-upcloud'

new dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.docs">docs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.health">health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.indexName">indexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.numberOfReplicas">numberOfReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.numberOfShards">numberOfShards</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.readOnlyAllowDelete">readOnlyAllowDelete</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices">DataUpcloudManagedDatabaseOpensearchIndicesIndices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `docs`<sup>Required</sup> <a name="docs" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.docs"></a>

```typescript
public readonly docs: number;
```

- *Type:* number

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.health"></a>

```typescript
public readonly health: string;
```

- *Type:* string

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

---

##### `numberOfReplicas`<sup>Required</sup> <a name="numberOfReplicas" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.numberOfReplicas"></a>

```typescript
public readonly numberOfReplicas: number;
```

- *Type:* number

---

##### `numberOfShards`<sup>Required</sup> <a name="numberOfShards" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.numberOfShards"></a>

```typescript
public readonly numberOfShards: number;
```

- *Type:* number

---

##### `readOnlyAllowDelete`<sup>Required</sup> <a name="readOnlyAllowDelete" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.readOnlyAllowDelete"></a>

```typescript
public readonly readOnlyAllowDelete: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataUpcloudManagedDatabaseOpensearchIndicesIndices;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices">DataUpcloudManagedDatabaseOpensearchIndicesIndices</a>

---



