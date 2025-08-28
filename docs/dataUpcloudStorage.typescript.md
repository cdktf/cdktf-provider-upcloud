# `dataUpcloudStorage` Submodule <a name="`dataUpcloudStorage` Submodule" id="@cdktf/provider-upcloud.dataUpcloudStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudStorage <a name="DataUpcloudStorage" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/data-sources/storage upcloud_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer"></a>

```typescript
import { dataUpcloudStorage } from '@cdktf/provider-upcloud'

new dataUpcloudStorage.DataUpcloudStorage(scope: Construct, id: string, config?: DataUpcloudStorageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig">DataUpcloudStorageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig">DataUpcloudStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetAccessType">resetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetMostRecent">resetMostRecent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetNameRegex">resetNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccessType` <a name="resetAccessType" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetAccessType"></a>

```typescript
public resetAccessType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMostRecent` <a name="resetMostRecent" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetMostRecent"></a>

```typescript
public resetMostRecent(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNameRegex` <a name="resetNameRegex" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetNameRegex"></a>

```typescript
public resetNameRegex(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetTitle"></a>

```typescript
public resetTitle(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetType"></a>

```typescript
public resetType(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataUpcloudStorage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isConstruct"></a>

```typescript
import { dataUpcloudStorage } from '@cdktf/provider-upcloud'

dataUpcloudStorage.DataUpcloudStorage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isTerraformElement"></a>

```typescript
import { dataUpcloudStorage } from '@cdktf/provider-upcloud'

dataUpcloudStorage.DataUpcloudStorage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isTerraformDataSource"></a>

```typescript
import { dataUpcloudStorage } from '@cdktf/provider-upcloud'

dataUpcloudStorage.DataUpcloudStorage.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.generateConfigForImport"></a>

```typescript
import { dataUpcloudStorage } from '@cdktf/provider-upcloud'

dataUpcloudStorage.DataUpcloudStorage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataUpcloudStorage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataUpcloudStorage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataUpcloudStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/data-sources/storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.encrypt">encrypt</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.systemLabels">systemLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.accessTypeInput">accessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.mostRecentInput">mostRecentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.nameRegexInput">nameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.accessType">accessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.mostRecent">mostRecent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.nameRegex">nameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `encrypt`<sup>Required</sup> <a name="encrypt" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.encrypt"></a>

```typescript
public readonly encrypt: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemLabels`<sup>Required</sup> <a name="systemLabels" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.systemLabels"></a>

```typescript
public readonly systemLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `accessTypeInput`<sup>Optional</sup> <a name="accessTypeInput" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.accessTypeInput"></a>

```typescript
public readonly accessTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mostRecentInput`<sup>Optional</sup> <a name="mostRecentInput" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.mostRecentInput"></a>

```typescript
public readonly mostRecentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nameRegexInput`<sup>Optional</sup> <a name="nameRegexInput" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.nameRegexInput"></a>

```typescript
public readonly nameRegexInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mostRecent`<sup>Required</sup> <a name="mostRecent" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.mostRecent"></a>

```typescript
public readonly mostRecent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameRegex`<sup>Required</sup> <a name="nameRegex" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.nameRegex"></a>

```typescript
public readonly nameRegex: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudStorageConfig <a name="DataUpcloudStorageConfig" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.Initializer"></a>

```typescript
import { dataUpcloudStorage } from '@cdktf/provider-upcloud'

const dataUpcloudStorageConfig: dataUpcloudStorage.DataUpcloudStorageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.accessType">accessType</a></code> | <code>string</code> | The access type of the storage, `public` or `private`. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.id">id</a></code> | <code>string</code> | UUID of the storage. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.mostRecent">mostRecent</a></code> | <code>boolean \| cdktf.IResolvable</code> | If more than one result is returned, use the most recent storage. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.name">name</a></code> | <code>string</code> | Exact name of the storage (same as title). Deprecated, use `title` instead. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.nameRegex">nameRegex</a></code> | <code>string</code> | Use regular expression to match storage name. Deprecated, use exact title or UUID instead. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.title">title</a></code> | <code>string</code> | The title of the storage. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.type">type</a></code> | <code>string</code> | The type of the storage. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.zone">zone</a></code> | <code>string</code> | The zone the storage is in, e.g. `de-fra1`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessType`<sup>Optional</sup> <a name="accessType" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

The access type of the storage, `public` or `private`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/data-sources/storage#access_type DataUpcloudStorage#access_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

UUID of the storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/data-sources/storage#id DataUpcloudStorage#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mostRecent`<sup>Optional</sup> <a name="mostRecent" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.mostRecent"></a>

```typescript
public readonly mostRecent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If more than one result is returned, use the most recent storage.

This is only useful with private storages. Public storages might give unpredictable results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/data-sources/storage#most_recent DataUpcloudStorage#most_recent}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Exact name of the storage (same as title). Deprecated, use `title` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/data-sources/storage#name DataUpcloudStorage#name}

---

##### `nameRegex`<sup>Optional</sup> <a name="nameRegex" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.nameRegex"></a>

```typescript
public readonly nameRegex: string;
```

- *Type:* string

Use regular expression to match storage name. Deprecated, use exact title or UUID instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/data-sources/storage#name_regex DataUpcloudStorage#name_regex}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The title of the storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/data-sources/storage#title DataUpcloudStorage#title}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/data-sources/storage#type DataUpcloudStorage#type}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The zone the storage is in, e.g. `de-fra1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/data-sources/storage#zone DataUpcloudStorage#zone}

---



