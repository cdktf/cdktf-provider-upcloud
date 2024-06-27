# `dataUpcloudManagedDatabaseMysqlSessions` Submodule <a name="`dataUpcloudManagedDatabaseMysqlSessions` Submodule" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudManagedDatabaseMysqlSessions <a name="DataUpcloudManagedDatabaseMysqlSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.1/docs/data-sources/managed_database_mysql_sessions upcloud_managed_database_mysql_sessions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabaseMysqlSessions } from '@cdktf/provider-upcloud'

new dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions(scope: Construct, id: string, config: DataUpcloudManagedDatabaseMysqlSessionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig">DataUpcloudManagedDatabaseMysqlSessionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig">DataUpcloudManagedDatabaseMysqlSessionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.putSessions">putSessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetOffset">resetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetSessions">resetSessions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSessions` <a name="putSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.putSessions"></a>

```typescript
public putSessions(value: IResolvable | DataUpcloudManagedDatabaseMysqlSessionsSessions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.putSessions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions">DataUpcloudManagedDatabaseMysqlSessionsSessions</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetOffset` <a name="resetOffset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetOffset"></a>

```typescript
public resetOffset(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetSessions` <a name="resetSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetSessions"></a>

```typescript
public resetSessions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataUpcloudManagedDatabaseMysqlSessions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isConstruct"></a>

```typescript
import { dataUpcloudManagedDatabaseMysqlSessions } from '@cdktf/provider-upcloud'

dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isTerraformElement"></a>

```typescript
import { dataUpcloudManagedDatabaseMysqlSessions } from '@cdktf/provider-upcloud'

dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isTerraformDataSource"></a>

```typescript
import { dataUpcloudManagedDatabaseMysqlSessions } from '@cdktf/provider-upcloud'

dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.generateConfigForImport"></a>

```typescript
import { dataUpcloudManagedDatabaseMysqlSessions } from '@cdktf/provider-upcloud'

dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataUpcloudManagedDatabaseMysqlSessions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataUpcloudManagedDatabaseMysqlSessions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataUpcloudManagedDatabaseMysqlSessions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.1/docs/data-sources/managed_database_mysql_sessions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudManagedDatabaseMysqlSessions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.sessions">sessions</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList">DataUpcloudManagedDatabaseMysqlSessionsSessionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.limitInput">limitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.offsetInput">offsetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.sessionsInput">sessionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions">DataUpcloudManagedDatabaseMysqlSessionsSessions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.offset">offset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `sessions`<sup>Required</sup> <a name="sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.sessions"></a>

```typescript
public readonly sessions: DataUpcloudManagedDatabaseMysqlSessionsSessionsList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList">DataUpcloudManagedDatabaseMysqlSessionsSessionsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.limitInput"></a>

```typescript
public readonly limitInput: number;
```

- *Type:* number

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.offsetInput"></a>

```typescript
public readonly offsetInput: number;
```

- *Type:* number

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `sessionsInput`<sup>Optional</sup> <a name="sessionsInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.sessionsInput"></a>

```typescript
public readonly sessionsInput: IResolvable | DataUpcloudManagedDatabaseMysqlSessionsSessions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions">DataUpcloudManagedDatabaseMysqlSessionsSessions</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudManagedDatabaseMysqlSessionsConfig <a name="DataUpcloudManagedDatabaseMysqlSessionsConfig" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabaseMysqlSessions } from '@cdktf/provider-upcloud'

const dataUpcloudManagedDatabaseMysqlSessionsConfig: dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.service">service</a></code> | <code>string</code> | Service's UUID for which these sessions belongs to. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.1/docs/data-sources/managed_database_mysql_sessions#id DataUpcloudManagedDatabaseMysqlSessions#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.limit">limit</a></code> | <code>number</code> | Number of entries to receive at most. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.offset">offset</a></code> | <code>number</code> | Offset for retrieved results based on sort order. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.order">order</a></code> | <code>string</code> | Order by session field and sort retrieved results. Limited variables can be used for ordering. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.sessions">sessions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions">DataUpcloudManagedDatabaseMysqlSessionsSessions</a>[]</code> | sessions block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Service's UUID for which these sessions belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.1/docs/data-sources/managed_database_mysql_sessions#service DataUpcloudManagedDatabaseMysqlSessions#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.1/docs/data-sources/managed_database_mysql_sessions#id DataUpcloudManagedDatabaseMysqlSessions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

Number of entries to receive at most.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.1/docs/data-sources/managed_database_mysql_sessions#limit DataUpcloudManagedDatabaseMysqlSessions#limit}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

Offset for retrieved results based on sort order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.1/docs/data-sources/managed_database_mysql_sessions#offset DataUpcloudManagedDatabaseMysqlSessions#offset}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Order by session field and sort retrieved results. Limited variables can be used for ordering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.1/docs/data-sources/managed_database_mysql_sessions#order DataUpcloudManagedDatabaseMysqlSessions#order}

---

##### `sessions`<sup>Optional</sup> <a name="sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.sessions"></a>

```typescript
public readonly sessions: IResolvable | DataUpcloudManagedDatabaseMysqlSessionsSessions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions">DataUpcloudManagedDatabaseMysqlSessionsSessions</a>[]

sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.1/docs/data-sources/managed_database_mysql_sessions#sessions DataUpcloudManagedDatabaseMysqlSessions#sessions}

---

### DataUpcloudManagedDatabaseMysqlSessionsSessions <a name="DataUpcloudManagedDatabaseMysqlSessionsSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabaseMysqlSessions } from '@cdktf/provider-upcloud'

const dataUpcloudManagedDatabaseMysqlSessionsSessions: dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudManagedDatabaseMysqlSessionsSessionsList <a name="DataUpcloudManagedDatabaseMysqlSessionsSessionsList" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabaseMysqlSessions } from '@cdktf/provider-upcloud'

new dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.get"></a>

```typescript
public get(index: number): DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions">DataUpcloudManagedDatabaseMysqlSessionsSessions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataUpcloudManagedDatabaseMysqlSessionsSessions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions">DataUpcloudManagedDatabaseMysqlSessionsSessions</a>[]

---


### DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference <a name="DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabaseMysqlSessions } from '@cdktf/provider-upcloud'

new dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.applicationName">applicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.clientAddr">clientAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.datname">datname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.queryDuration">queryDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.usename">usename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions">DataUpcloudManagedDatabaseMysqlSessionsSessions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

---

##### `clientAddr`<sup>Required</sup> <a name="clientAddr" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.clientAddr"></a>

```typescript
public readonly clientAddr: string;
```

- *Type:* string

---

##### `datname`<sup>Required</sup> <a name="datname" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.datname"></a>

```typescript
public readonly datname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `queryDuration`<sup>Required</sup> <a name="queryDuration" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.queryDuration"></a>

```typescript
public readonly queryDuration: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `usename`<sup>Required</sup> <a name="usename" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.usename"></a>

```typescript
public readonly usename: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataUpcloudManagedDatabaseMysqlSessionsSessions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions">DataUpcloudManagedDatabaseMysqlSessionsSessions</a>

---



